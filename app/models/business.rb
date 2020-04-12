class Business < ApplicationRecord
  has_many :departments, dependent: :destroy
  has_many :users, dependent: :destroy
  has_many :proyects, through: :departments, dependent: :destroy
  has_many :forums, through: :departments, dependent: :destroy
  has_many :tasks, through: :proyects, dependent: :destroy
end
