# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121112224316) do

  create_table "tweet", :force => true do |t|
    t.string "content"
    t.string "tweet_id"
    t.string "screen_name"
  end

  create_table "tweets", :force => true do |t|
    t.string "content"
    t.string "tweet_id"
    t.string "screen_name"
  end

  create_table "user", :force => true do |t|
    t.string "oauth_token"
    t.string "oauth_secret"
  end

  create_table "users", :force => true do |t|
    t.string   "user"
    t.string   "oath_token"
    t.string   "oath_secret"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

end
