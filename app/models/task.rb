class Task < ApplicationRecord
  belongs_to :project
  belongs_to :administrator, class_name: "User"
  has_and_belongs_to_many :users
end
