class CreatePayments < ActiveRecord::Migration
  def change
    create_table :payments do |t|
      t.integer :event_id
      t.string :user_name
      t.decimal :paid,default: 0

      t.timestamps null: false
    end
  end
end
