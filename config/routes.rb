Rails.application.routes.draw do
  root "pages#index"
  resources :teams
  
  post "/login", to: "sessions#create"
end
