# Generated by Django 5.1.2 on 2024-10-25 08:42

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="info",
            name="gender",
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name="info",
            name="marital_status",
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name="info",
            name="rent_or_own",
            field=models.CharField(max_length=20),
        ),
    ]
