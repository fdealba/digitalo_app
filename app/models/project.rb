class Project < ApplicationRecord
  belongs_to :administrator, class_name: "User"
  belongs_to :department
  has_and_belongs_to_many :users
  has_many :tasks
end



