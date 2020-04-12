class CreateUserposts < ActiveRecord::Migration[5.2]
  def change
    create_table :userposts do |t|

      t.timestamps
    end
  end
end
