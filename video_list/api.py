__author__ = 'adamj'

from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from video_list.models import Video


class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
        resource_name = 'video'
        allowed_methods = ['get', 'post', 'delete']
        authorization = Authorization()  # TODO: Replace with secure Auth in real-world
