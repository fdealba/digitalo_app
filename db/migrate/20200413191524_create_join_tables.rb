class CreateJoinTables < ActiveRecord::Migration[5.2]
  def change
      create_join_table :projects, :users
      create_join_table :posts, :users
      create_join_table :tasks, :users
  end
end
