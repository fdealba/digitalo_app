class Category < ApplicationRecord
  belongs_to :forum
  has_many :posts
end
