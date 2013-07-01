__author__ = 'adamj'

from tastypie.resources import ModelResource
from video_list.models import Video

class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
        resource_name = 'video'
