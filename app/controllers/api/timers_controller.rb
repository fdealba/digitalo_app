module API
  class TimersController < ApplicationController
    def load
      # @user = current_user
      @user = User.find(1)
      last_timer = @user.timers.last
      total_worked = { seconds: 0, minutes: 0, hours: 0 }
        if @user.timers_today.length > 0
          @user.timers_today.each do |timer|
            total_worked[:seconds] += timer.time_worked[:seconds]
            total_worked[:minutes] += timer.time_worked[:minutes]
            total_worked[:hours] += timer.time_worked[:hours]
          end
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
      @user = User.find(1)
      # @user deberia ser current_user -> user que esta logiado.
      @timer.user = @user
      @timer.running = true
      @timer.save!
      render json: { data: 'TODO OK' }
    end

    def stop
      # @user = current_user
      @user = User.find(1)
      last_timer = @user.timers.last
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

  end
end