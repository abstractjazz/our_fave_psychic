class Api::VideosController < ApplicationController 

before_action :set_video, only: [:show]

    def index 
        render json: Video.all
    end 

    def create 
        video = Video.new(video_params)
        if video.save 
          render json: video  
        else 
            render json: {message: video.errors}, status: 400
        end 
    end 

    def show 
        render json: @video
    end 

    def update 
       if @video.update(video_params)
        render json: @video 
       else 
        render json: {message: video.errors}, status: 400
    end 
end 

    private 

    def set_video 
        @video = Video.find_by(id:params[:id])
    end 
    
    def video_params
        params.require(:video).permit(:name, :url)
    end 

end 