package com.example.mongodbapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "fdb_entities")  // MongoDB collection name
public class Entity {

    @Id
    private String id;

    @Field("entity_id")
    private int entityId;

    @Field("category")
    private String category;

    @Field("category_readable")
    private String categoryReadable;

    @Field("entity_alias")
    private String entityAlias;

    @Field("entity_alias_basket")
    private String entityAliasBasket;

    @Field("entity_alias_readable")
    private String entityAliasReadable;

    @Field("entity_alias_synonyms")
    private String entityAliasSynonyms;

    @Field("entity_alias_url")
    private String entityAliasUrl;

    @Field("natural_source_name")
    private String naturalSourceName;

    @Field("natural_source_url")
    private String naturalSourceUrl;

    // Getters and Setters for all fields

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getEntityId() {
        return entityId;
    }

    public void setEntityId(int entityId) {
        this.entityId = entityId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategoryReadable() {
        return categoryReadable;
    }

    public void setCategoryReadable(String categoryReadable) {
        this.categoryReadable = categoryReadable;
    }

    public String getEntityAlias() {
        return entityAlias;
    }

    public void setEntityAlias(String entityAlias) {
        this.entityAlias = entityAlias;
    }

    public String getEntityAliasBasket() {
        return entityAliasBasket;
    }

    public void setEntityAliasBasket(String entityAliasBasket) {
        this.entityAliasBasket = entityAliasBasket;
    }

    public String getEntityAliasReadable() {
        return entityAliasReadable;
    }

    public void setEntityAliasReadable(String entityAliasReadable) {
        this.entityAliasReadable = entityAliasReadable;
    }

    public String getEntityAliasSynonyms() {
        return entityAliasSynonyms;
    }

    public void setEntityAliasSynonyms(String entityAliasSynonyms) {
        this.entityAliasSynonyms = entityAliasSynonyms;
    }

    public String getEntityAliasUrl() {
        return entityAliasUrl;
    }

    public void setEntityAliasUrl(String entityAliasUrl) {
        this.entityAliasUrl = entityAliasUrl;
    }

    public String getNaturalSourceName() {
        return naturalSourceName;
    }

    public void setNaturalSourceName(String naturalSourceName) {
        this.naturalSourceName = naturalSourceName;
    }

    public String getNaturalSourceUrl() {
        return naturalSourceUrl;
    }

    public void setNaturalSourceUrl(String naturalSourceUrl) {
        this.naturalSourceUrl = naturalSourceUrl;
    }
}
