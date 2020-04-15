class Category < ApplicationRecord
  belongs_to :forum, class_name: "forum", foreign_key: "forum_id"
  belongs_to :administrator, class_name: "User"
  has_many :posts
end
