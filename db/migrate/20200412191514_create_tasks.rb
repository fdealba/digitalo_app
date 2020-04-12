class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.boolean :completed, default: false
      t.integer :progress, default: 0
      t.boolean :started, default: false
      t.string :title
      t.text :body 
      t.references :proyect, foreign_key: true
      t.timestamps
    end
  end
end
