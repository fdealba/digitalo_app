class CreateDepartments < ActiveRecord::Migration[5.2]
  def change
    create_table :departments do |t|
      t.string :name
      t.references :business, foreign_key: true
      t.timestamps
    end
    add_reference :users, :department, foreign_key: true
    add_reference :projects, :department, foreign_key: true
  end
end
