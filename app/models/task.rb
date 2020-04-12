class Task < ApplicationRecord
  belongs_to :proyect
  has_many :usertasks
end
