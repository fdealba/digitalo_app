class Department < ApplicationRecord
  belongs_to :business, dependent: :destroy
  belongs_to :administrator, class_name: "User"
  has_many :users, dependent: :destroy
  has_many :projects, dependent: :destroy
  has_many :tasks, through: :projects, dependent: :destroy
  has_one :forum, dependent: :destroy
end
