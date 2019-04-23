Rails.application.routes.draw do
  resources :teams
  
  post "/login", to: "sessions#create"
end
