class CreateTimers < ActiveRecord::Migration[5.2]
  def change
    create_table :timers do |t|
      t.integer :seconds, default: 0
      t.integer :minutes, default: 0
      t.integer :hours, default: 0
      t.datetime :stop_time
      t.boolean :running, default: false
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
