class Timer < ApplicationRecord
  belongs_to :user

  def seconds_worked
    self.running ? Time.now - self.created_at : self.updated_at - self.created_at
  end
end
