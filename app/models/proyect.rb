class Proyect < ApplicationRecord
  belongs_to :department
  has_many :users, through: :userproyects
  has_many :tasks
end
