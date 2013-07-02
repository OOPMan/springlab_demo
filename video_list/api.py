__author__ = 'adamj'

from tastypie.authorization import Authorization
from tastypie.resources import ModelResource
from tastypie.serializers import Serializer
from video_list.models import Video


class EXT4Serializer(Serializer):

    def to_json(self, data, options=None):
        data['success'] = True
        return super(EXT4Serializer, self).to_json(data, options)


class VideoResource(ModelResource):
    class Meta:
        queryset = Video.objects.all()
        resource_name = 'video'
        allowed_methods = ['get', 'post', 'delete']
        authorization = Authorization()  # TODO: Replace with secure Auth in real-world
        serializer = EXT4Serializer()
