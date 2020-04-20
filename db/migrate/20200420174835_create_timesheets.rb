class CreateTimesheets < ActiveRecord::Migration[5.2]
  def change
    create_table :timesheets do |t|
      t.date :date
      t.date :time_from
      t.date :time_to
      t.text :comment
      t.string :type
      t.date :time_worked
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
