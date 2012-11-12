Smashbox::Application.routes.draw do 
  match ':controller(/:action)'
  resources :tweet, :only => [:index, :search, :show]
  root :to => redirect('/tweet/index')
end
