class Category < ApplicationRecord
  belongs_to :forum, class_name: "forum", foreign_key: "forum_id"
  belongs_to :user, class_name: "user", foreign_key: "user_id"
  has_many :posts
end
