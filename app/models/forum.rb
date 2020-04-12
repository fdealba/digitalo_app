class Forum < ApplicationRecord
  belongs_to :department
  has_many :categories
end
