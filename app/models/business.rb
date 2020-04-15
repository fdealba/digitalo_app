class Business < ApplicationRecord
  belongs_to :administrator, class_name: "User"
  has_many :departments, dependent: :destroy
  has_many :users, dependent: :destroy
  has_many :projects, through: :departments, dependent: :destroy
  has_many :forums, through: :departments, dependent: :destroy
  has_many :tasks, through: :proyects, dependent: :destroy
end
