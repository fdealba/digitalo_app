class Proyect < ApplicationRecord
  belongs_to :department
  belongs_to :user
  has_many :tasks
end
