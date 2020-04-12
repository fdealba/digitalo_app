class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :proyects, through: :userproyects, dependent: :destroy
  has_many :tasks, through: :usertasks, dependent: :destroy
  has_many :posts, through: :userposts, dependent: :destroy
  has_many :replies, through: :posts, dependent: :destroy
  has_many :categories, dependent: :destroy
  belongs_to :business, dependent: :destroy
  belongs_to :department, dependent: :destroy
end
