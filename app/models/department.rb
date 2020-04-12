class Department < ApplicationRecord
  belongs_to :business, dependent: :destroy
  has_many :users, dependent: :destroy
  has_many :proyects, dependent: :destroy
  has_many :tasks, through: :proyects, dependent: :destroy
  has_one :forum, dependent: :destroy
end
