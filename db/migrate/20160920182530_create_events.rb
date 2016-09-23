class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :location
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
