module API
  class TimersController < ApplicationController
    def load
      @user = current_user
      last_timer = @user.timers.last
      total_worked = { seconds: 0, minutes: 0, hours: 0 }
        if @user.timers_today.length > 0
          seconds = 0
          @user.timers_today.each { |timer| seconds += timer.seconds_worked.floor }
          total_worked = convert_second_into_hours(seconds)
        end
        render json: { 
          timer: {
          seconds: total_worked[:seconds],
          minutes: total_worked[:minutes],
          hours: total_worked[:hours],
          running: last_timer[:running]
          }
        }
    end

    def start
      @timer = Timer.new()
      @timer.user = current_user
      @timer.save!
    end

    def stop
      last_timer = current_user.timers.last
      if last_timer.running
        last_timer.running = false
        last_timer.save!
        render json: {
          start: last_timer.created_at,
          finish: last_timer.updated_at
        }
      end
    end

    private

    def convert_second_into_hours(calculated_seconds)
      hours = calculated_seconds/(60*60)
      remaining_seconds = calculated_seconds - ( hours*60*60 )
      minutes = remaining_seconds / 60
      seconds = remaining_seconds - ( minutes * 60 )
      { hours: hours, minutes: minutes, seconds: seconds}
    end
  end
end