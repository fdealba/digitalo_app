class AddAdminToProjects < ActiveRecord::Migration[5.2]
  def change
    add_reference :projects, :administrator, foreign_key: { to_table: :users }
    add_reference :posts, :administrator, foreign_key: { to_table: :users }
    add_reference :tasks, :administrator, foreign_key: { to_table: :users }
    add_reference :businesses, :administrator, foreign_key: { to_table: :users }
    add_reference :departments, :administrator, foreign_key: { to_table: :users }
    add_reference :categories, :administrator, foreign_key: { to_table: :users }
  end
end
