class CreateUserproyects < ActiveRecord::Migration[5.2]
  def change
    create_table :userproyects do |t|
      t.references :user, foreign_key: true
      t.references :proyect, foreign_key: true
      t.timestamps
    end
  end
end
