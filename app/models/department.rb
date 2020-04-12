class Department < ApplicationRecord
  has_many :users
  has_one :department
  has_many :proyects
end
