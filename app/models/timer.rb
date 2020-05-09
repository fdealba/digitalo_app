class Timer < ApplicationRecord
  belongs_to :user

  def time_worked
    if self.running
      seconds_worked = Time.now - self.created_at
      time_worked = convert_second_into_hours(seconds_worked.floor)
    else
      seconds_worked = self.updated_at - self.created_at
      time_worked = convert_second_into_hours(seconds_worked.floor)
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
