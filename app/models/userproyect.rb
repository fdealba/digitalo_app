class Userproyect < ApplicationRecord
  belongs_to :user, class_name: "user", foreign_key: "user_id"
  belongs_to :proyect, class_name: "proyect", foreign_key: "proyect_id"
end
