class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # Projects
  has_many :owned_projects, class_name: 'Project', foreign_key: 'administrator_id', dependent: :destroy
  has_and_belongs_to_many :projects

  # Posts
  has_many :owned_posts, class_name: 'Post', foreign_key: 'administrator_id', dependent: :destroy
  has_and_belongs_to_many :posts

  # Tasks
  has_many :owned_tasks, class_name: 'Task', foreign_key: 'administrator_id', dependent: :destroy
  has_and_belongs_to_many :tasks

  has_many :replies, through: :posts, dependent: :destroy
  has_many :categories, dependent: :destroy
  has_many :timers
  belongs_to :business, dependent: :destroy
  belongs_to :department, dependent: :destroy

  def timers_today
    self.timers.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day)
  end
end