class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
	  t.string :user
	  t.string :oath_token
	  t.string :oath_secret
      t.timestamps
    end
  end
end
