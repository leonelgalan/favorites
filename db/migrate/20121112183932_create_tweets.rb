class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :tweet_id, :limit => 8
      t.text :content
      t.string :screen_name

      t.timestamps
    end
  end
end
