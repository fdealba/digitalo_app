class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true
      t.references :forum, foreign_key: true
      t.timestamps
    end
  end
end
