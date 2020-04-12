class CreateProyects < ActiveRecord::Migration[5.2]
  def change
    create_table :proyects do |t|
      t.string :title
      t.text :description
      t.references :user, foreign_key: true
      t.references :department, foreign_key: true
      t.timestamps
    end
  end
end
