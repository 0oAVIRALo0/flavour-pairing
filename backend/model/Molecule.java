package com.example.mongodbapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "fdb_molecules")
public class Molecule {

    @Id
    private String id;

    @Field("pubchem_id")
    private Integer pubchemId;

    @Field("iupac_name")
    private String iupacName;

    @Field("common_name")
    private String commonName;

    @Field("smile")
    private String smile;

    @Field("molecular_weight")
    private double molecularWeight;

    @Field("hbd_count")
    private Integer hbdCount;

    @Field("hba_count")
    private Integer hbaCount;

    @Field("num_rotatablebonds")
    private Integer numRotatableBonds;

    @Field("complexity")
    private double complexity;

    @Field("topological_polor_surfacearea")
    private Double topologicalPolarSurfaceArea;

    @Field("monoisotopic_mass")
    private Double monoisotopicMass;

    @Field("exact_mass")
    private double exactMass;

    @Field("xlogp")
    private double xlogp;

    @Field("charge")
    private Integer charge;

    @Field("heavy_atom_count")
    private Integer heavyAtomCount;

    @Field("atom_stereo_count")
    private Integer atomStereoCount;

    @Field("defined_atom_stereocenter_count")
    private Integer definedAtomStereoCenterCount;

    @Field("undefined_atom_stereocenter_count")
    private Integer undefinedAtomStereoCenterCount;

    @Field("bond_stereo_count")
    private Integer bondStereoCount;

    @Field("defined_bond_stereocenter_count")
    private Integer definedBondStereoCenterCount;

    @Field("undefined_bond_stereocenter_count")
    private Integer undefinedBondStereoCenterCount;

    @Field("isotope_atom_count")
    private Integer isotopeAtomCount;

    @Field("covalently_bonded_unit_count")
    private Integer covalentlyBondedUnitCount;

    @Field("cas_id")
    private String casId;

    @Field("fema_number")
    private String femaNumber;

    @Field("fema_flavor_profile")
    private String femaFlavorProfile;

    @Field("odor")
    private String odor;

    @Field("taste")
    private String taste;

    @Field("functional_groups")
    private String functionalGroups;

    @Field("inchi")
    private String inchi;

    @Field("volume3d")
    private double volume3d;

    @Field("fooddb_flavor_profile")
    private String foodDbFlavorProfile;

    @Field("super_sweet")
    private String superSweet;

    @Field("bitter")
    private double bitter;

    @Field("supersweetdb_id")
    private double superSweetDbId;

    @Field("bitterdb_id")
    private double bitterDbId;

    @Field("fooddb_id")
    private String foodDbId;

    @Field("flavornet_id")
    private Integer flavorNetId;

    @Field("fenoroli_and_os")
    private Integer fenoroliAndOs;

    @Field("natural")
    private Integer natural;

    @Field("unknown_natural")
    private Integer unknownNatural;

    @Field("synthetic")
    private Integer synthetic;

    @Field("flavor_profile")
    private String flavorProfile;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getPubchemId() {
        return pubchemId;
    }

    public void setPubchemId(Integer pubchemId) {
        this.pubchemId = pubchemId;
    }

    public String getIupacName() {
        return iupacName;
    }

    public void setIupacName(String iupacName) {
        this.iupacName = iupacName;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getSmile() {
        return smile;
    }

    public void setSmile(String smile) {
        this.smile = smile;
    }

    public double getMolecularWeight() {
        return molecularWeight;
    }

    public void setMolecularWeight(double molecularWeight) {
        this.molecularWeight = molecularWeight;
    }

    public Integer getHbdCount() {
        return hbdCount;
    }

    public void setHbdCount(Integer hbdCount) {
        this.hbdCount = hbdCount;
    }

    public Integer getHbaCount() {
        return hbaCount;
    }

    public void setHbaCount(Integer hbaCount) {
        this.hbaCount = hbaCount;
    }

    public Integer getNumRotatableBonds() {
        return numRotatableBonds;
    }

    public void setNumRotatableBonds(Integer numRotatableBonds) {
        this.numRotatableBonds = numRotatableBonds;
    }

    public double getComplexity() {
        return complexity;
    }

    public void setComplexity(double complexity) {
        this.complexity = complexity;
    }

    public Double getTopologicalPolarSurfaceArea() {
        return topologicalPolarSurfaceArea;
    }

    public void setTopologicalPolarSurfaceArea(Double topologicalPolarSurfaceArea) {
        this.topologicalPolarSurfaceArea = topologicalPolarSurfaceArea;
    }

    public Double getMonoisotopicMass() {
        return monoisotopicMass;
    }

    public void setMonoisotopicMass(Double monoisotopicMass) {
        this.monoisotopicMass = monoisotopicMass;
    }

    public double getExactMass() {
        return exactMass;
    }

    public void setExactMass(double exactMass) {
        this.exactMass = exactMass;
    }

    public double getXlogp() {
        return xlogp;
    }

    public void setXlogp(double xlogp) {
        this.xlogp = xlogp;
    }

    public Integer getCharge() {
        return charge;
    }

    public void setCharge(Integer charge) {
        this.charge = charge;
    }

    public Integer getHeavyAtomCount() {
        return heavyAtomCount;
    }

    public void setHeavyAtomCount(Integer heavyAtomCount) {
        this.heavyAtomCount = heavyAtomCount;
    }

    public Integer getAtomStereoCount() {
        return atomStereoCount;
    }

    public void setAtomStereoCount(Integer atomStereoCount) {
        this.atomStereoCount = atomStereoCount;
    }

    public Integer getDefinedAtomStereoCenterCount() {
        return definedAtomStereoCenterCount;
    }

    public void setDefinedAtomStereoCenterCount(Integer definedAtomStereoCenterCount) {
        this.definedAtomStereoCenterCount = definedAtomStereoCenterCount;
    }

    public Integer getUndefinedAtomStereoCenterCount() {
        return undefinedAtomStereoCenterCount;
    }

    public void setUndefinedAtomStereoCenterCount(Integer undefinedAtomStereoCenterCount) {
        this.undefinedAtomStereoCenterCount = undefinedAtomStereoCenterCount;
    }

    public Integer getBondStereoCount() {
        return bondStereoCount;
    }

    public void setBondStereoCount(Integer bondStereoCount) {
        this.bondStereoCount = bondStereoCount;
    }

    public Integer getDefinedBondStereoCenterCount() {
        return definedBondStereoCenterCount;
    }

    public void setDefinedBondStereoCenterCount(Integer definedBondStereoCenterCount) {
        this.definedBondStereoCenterCount = definedBondStereoCenterCount;
    }

    public Integer getUndefinedBondStereoCenterCount() {
        return undefinedBondStereoCenterCount;
    }

    public void setUndefinedBondStereoCenterCount(Integer undefinedBondStereoCenterCount) {
        this.undefinedBondStereoCenterCount = undefinedBondStereoCenterCount;
    }

    public Integer getIsotopeAtomCount() {
        return isotopeAtomCount;
    }

    public void setIsotopeAtomCount(Integer isotopeAtomCount) {
        this.isotopeAtomCount = isotopeAtomCount;
    }

    public Integer getCovalentlyBondedUnitCount() {
        return covalentlyBondedUnitCount;
    }

    public void setCovalentlyBondedUnitCount(Integer covalentlyBondedUnitCount) {
        this.covalentlyBondedUnitCount = covalentlyBondedUnitCount;
    }

    public String getCasId() {
        return casId;
    }

    public void setCasId(String casId) {
        this.casId = casId;
    }

    public String getFemaNumber() {
        return femaNumber;
    }

    public void setFemaNumber(String femaNumber) {
        this.femaNumber = femaNumber;
    }

    public String getFemaFlavorProfile() {
        return femaFlavorProfile;
    }

    public void setFemaFlavorProfile(String femaFlavorProfile) {
        this.femaFlavorProfile = femaFlavorProfile;
    }

    public String getOdor() {
        return odor;
    }

    public void setOdor(String odor) {
        this.odor = odor;
    }

    public String getTaste() {
        return taste;
    }

    public void setTaste(String taste) {
        this.taste = taste;
    }

    public String getFunctionalGroups() {
        return functionalGroups;
    }

    public void setFunctionalGroups(String functionalGroups) {
        this.functionalGroups = functionalGroups;
    }

    public String getInchi() {
        return inchi;
    }

    public void setInchi(String inchi) {
        this.inchi = inchi;
    }

    public double getVolume3d() {
        return volume3d;
    }

    public void setVolume3d(double volume3d) {
        this.volume3d = volume3d;
    }

    public String getFoodDbFlavorProfile() {
        return foodDbFlavorProfile;
    }

    public void setFoodDbFlavorProfile(String foodDbFlavorProfile) {
        this.foodDbFlavorProfile = foodDbFlavorProfile;
    }

    public String getSuperSweet() {
        return superSweet;
    }

    public void setSuperSweet(String superSweet) {
        this.superSweet = superSweet;
    }

    public double getBitter() {
        return bitter;
    }

    public void setBitter(double bitter) {
        this.bitter = bitter;
    }

    public double getSuperSweetDbId() {
        return superSweetDbId;
    }

    public void setSuperSweetDbId(double superSweetDbId) {
        this.superSweetDbId = superSweetDbId;
    }

    public double getBitterDbId() {
        return bitterDbId;
    }

    public void setBitterDbId(double bitterDbId) {
        this.bitterDbId = bitterDbId;
    }

    public String getFoodDbId() {
        return foodDbId;
    }

    public void setFoodDbId(String foodDbId) {
        this.foodDbId = foodDbId;
    }

    public Integer getFlavorNetId() {
        return flavorNetId;
    }

    public void setFlavorNetId(Integer flavorNetId) {
        this.flavorNetId = flavorNetId;
    }

    public Integer getFenoroliAndOs() {
        return fenoroliAndOs;
    }

    public void setFenoroliAndOs(Integer fenoroliAndOs) {
        this.fenoroliAndOs = fenoroliAndOs;
    }

    public Integer getNatural() {
        return natural;
    }

    public void setNatural(Integer natural) {
        this.natural = natural;
    }

    public Integer getUnknownNatural() {
        return unknownNatural;
    }

    public void setUnknownNatural(Integer unknownNatural) {
        this.unknownNatural = unknownNatural;
    }

    public Integer getSynthetic() {
        return synthetic;
    }

    public void setSynthetic(Integer synthetic) {
        this.synthetic = synthetic;
    }

    public String getFlavorProfile() {
        return flavorProfile;
    }

    public void setFlavorProfile(String flavorProfile) {
        this.flavorProfile = flavorProfile;
    }
// Constructors, Getters, and Setters

    public Molecule() {
    }
}
