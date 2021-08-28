Rails.application.routes.draw do
  namespace :api do 
    resources :videos, except: [:edit, :destroy]
  end
end 
