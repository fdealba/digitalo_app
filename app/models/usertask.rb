class Usertask < ApplicationRecord
  belongs_to :user, class_name: "user", foreign_key: "user_id"
  belongs_to :task, class_name: "task", foreign_key: "task_id"
end
