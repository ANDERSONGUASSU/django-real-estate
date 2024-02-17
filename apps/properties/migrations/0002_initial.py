# Generated by Django 5.0.1 on 2024-02-16 09:32

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('properties', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='property',
            name='user',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.DO_NOTHING,
                related_name='agent_buyer',
                to=settings.AUTH_USER_MODEL,
                verbose_name='Agente, Seller or Buyer',
            ),
        ),
        migrations.AddField(
            model_name='propertyviews',
            name='property',
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name='property_views',
                to='properties.property',
            ),
        ),
    ]