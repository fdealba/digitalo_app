class Post < ApplicationRecord
  belongs_to :category
  belongs_to :administrator, class_name: "User"
  has_and_belongs_to_many :users
  has_many :replies
end
