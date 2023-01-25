from django.db import models

# Create your models here.
class NftCard(models.Model):
  text = models.CharField(max_length=150)
  subtext = models.CharField(max_length=100)
  tag = models.CharField(max_length=50, default=None)
  image = models.ImageField(upload_to='images/', max_length=None)

  def __str__(self) -> str:
    return self.text