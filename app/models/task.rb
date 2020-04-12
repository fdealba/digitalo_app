class Task < ApplicationRecord
  belongs_to :proyect
  has_many :users, through: :usertasks
end
