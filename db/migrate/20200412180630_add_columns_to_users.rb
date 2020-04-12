class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :admin, :boolean, default: false
    add_column :users, :id_number, :string
    add_column :users, :name, :string
    add_column :users, :last_name, :string
    add_column :users, :phone_number, :string
    add_column :users, :role, :string
    add_column :users, :city, :string
    add_column :users, :salary, :integer
    add_column :users, :points, :integer
    add_reference :users, :business, foreign_key: true
  end
end