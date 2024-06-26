import { NFTMetadata } from '@/simplehash/types'
import { Address, Hash } from 'viem'

export enum RESOURCE_TYPE {
    ASSET = 'assets',
    COLLECTION = 'collections',
    DISPUTE = 'disputes',
    IPA_POLICY = 'ipapolicies',
    LICENSE = 'licenses',
    LICENSE_MINT_FEES = 'licenses/mintingfees',
    LICENSE_OWNER = 'licenses/owners',
    MODULE = 'modules',
    PERMISSION = 'permissions',
    POLICY = 'policies',
    POLICY_FRAMEWORK = 'policies/frameworks',
    ROYALTY = 'royalties',
    ROYALTY_PAY = 'royalties/payments',
    ROYALTY_POLICY = 'royalties/policies',
    ROYALTY_SPLIT = 'royalties/splits',
    TAGS = 'tags',
    TRANSACTION = 'transactions',
    LICENSE_IP_TERMS = 'licenses/ip/terms',
    LICENSE_TERMS = 'licenses/terms'
}

export type ResourceType =
    | RESOURCE_TYPE.ASSET
    | RESOURCE_TYPE.COLLECTION
    | RESOURCE_TYPE.TRANSACTION
    | RESOURCE_TYPE.LICENSE
    | RESOURCE_TYPE.LICENSE_MINT_FEES
    | RESOURCE_TYPE.LICENSE_OWNER
    | RESOURCE_TYPE.MODULE
    | RESOURCE_TYPE.POLICY
    | RESOURCE_TYPE.PERMISSION
    | RESOURCE_TYPE.POLICY_FRAMEWORK
    | RESOURCE_TYPE.TAGS
    | RESOURCE_TYPE.IPA_POLICY
    | RESOURCE_TYPE.ROYALTY
    | RESOURCE_TYPE.ROYALTY_PAY
    | RESOURCE_TYPE.ROYALTY_POLICY
    | RESOURCE_TYPE.ROYALTY_SPLIT
    | RESOURCE_TYPE.DISPUTE
    | RESOURCE_TYPE.LICENSE_IP_TERMS
    | RESOURCE_TYPE.LICENSE_TERMS

export type PaginationOptions = {
    limit?: number
    offset?: number
}

export type AssetFilterOptions = {
    chainId?: string
    metadataResolverAddress?: string
    tokenContract?: string
    tokenId?: string
}

export type DisputeFilterOptions = {
    currentTag?: string
    initiator?: string
    targetIpId?: string
    targetTag?: string
}

export type PermissionFilterOptions = {
    signer?: string
    to?: string
}

export type PolicyFilterOptions = {
    policyFrameworkManager?: string
}

export type PolicyFrameworkFilterOptions = {
    address?: string
    name?: string
}

export type RoyaltyFilterOptions = {
    ipId?: string | null
    royaltyPolicy?: string | null
}

export type TagFilterOptions = {
    ipId?: string
    tag?: string
}
export type RoyaltyPayFilterOptions = {
    ipId?: string
    payerIpId?: string
    receiverIpId?: string
    sender?: string
    token?: string
}

export type ModuleFilterOptions = {
    name?: string
}

export type LicenseFilterOptions = {
    licensorIpdId?: Address
    policyId?: string
}

export type LicenseFrameworkFilterOptions = {
    creator?: string
}

export type LicenseOwnerFilterOptions = {
    owner?: string
}

export type IPAPolicyFilterOptions = {
    active?: string
    inherited?: string
    policyId?: string
}

export type TransactionFilterOptions = {
    actionType?: string
    resourceId?: string
}

export type FilterOptions =
    | AssetFilterOptions
    | DisputeFilterOptions
    | PermissionFilterOptions
    | PolicyFilterOptions
    | PolicyFrameworkFilterOptions
    | RoyaltyFilterOptions
    | TagFilterOptions
    | RoyaltyPayFilterOptions
    | ModuleFilterOptions
    | LicenseFilterOptions
    | LicenseFrameworkFilterOptions
    | LicenseOwnerFilterOptions
    | IPAPolicyFilterOptions
    | TransactionFilterOptions

export type QueryOptions = {
    pagination: PaginationOptions
    where?: FilterOptions
}

export type Transaction = {
    id: string
    createdAt: string
    actionType: string
    initiator: Address
    ipId: Address
    resourceId: Address
    resourceType: string
}

export type Asset = {
    id: Address
    chainId: string
    childIpIds: Asset[] | null
    parentIpIds: Asset[] | null
    rootIpIds: Asset[] | null
    tokenContract: Address
    tokenId: string
    metadataResolverAddress: string
    nftMetadata: {
        name: string
        hash: string
        registrationDate: string
        registrant: string
        uri: string
        tokenContract: Address
        tokenId: string
        imageUrl: string
        tokenUri: string
    }
    blockNumber: string
    blockTimestamp: string
}

export type Permission = {
    id: string
    permission: string
    signer: Address
    to: Address
    func: string
    blockNumber: string
    blockTimestamp: string
}

export type License = {
    id: string
    policyId: string
    licensorIpId: Address
    amount: string
    transferable: boolean
    blockNumber: string
    blockTimestamp: string
}

export type PolicyFramework = {
    id: string
    address: Address
    name: string
    blockNumber: string
    blockTimestamp: string
}

export type Module = {
    id: string
    name: string
    module: string
    blockNumber: string
    blockTimestamp: string
    deletedAt: string
}

export type Tag = {
    id: string
    uuid: string
    ipId: Address
    tag: string
    deletedAt: string
    blockNumber: string
    blockTimestamp: string
}

export type IPAPolicy = {
    id: string
    ipId: Address
    policyId: Address
    index: string
    active: boolean
    inherited: boolean
    blockNumber: string
    blockTimestamp: string
}

export type RoyaltyPay = {
    id: string
    receiverIpId: Address
    payerIpId: Address
    sender: Address
    token: Address
    amount: string
    blockNumber: string
    blockTimestamp: string
}

export type Royalty = {
    id: string
    ipId: Address
    data: string
    royaltyPolicy: Address
    blockNumber: string
    blockTimestamp: string
}

export type RoyaltyPolicy = {
    id: Address
    ancestorsVault: Address
    splitClone: Address
    royaltyStack: string
    targetAncestors: Address[]
    targetRoyaltyAmount: string[]
    blockNumber: string
    blockTimestamp: string
}

export type Dispute = {
    id: string
    targetIpId: Address
    targetTag: Address
    currentTag: Address
    arbitrationPolicy: Address
    evidenceLink: string
    initiator: Address
    data: string
    blockNumber: string
    blockTimestamp: string
}

export type Collection = {
    id: string
    assetCount: string
    licensesCount: string
    resolvedDisputeCount: string
    cancelledDisputeCount: string
    raisedDisputeCount: string
    judgedDisputeCount: string
    blockNumber: string
    blockTimestamp: string
}

export type Policy = {
    id: string
    policyFrameworkManager: Address
    frameworkData: string
    royaltyPolicy: Address
    royaltyData: string
    mintingFee: string
    mintingFeeToken: Address
    blockNumber: string
    blockTimestamp: string
    pil: PILType
}

export type PILType = {
    id: Hash
    attribution: boolean
    commercialUse: boolean
    commercialAttribution: boolean
    commercializerChecker: Address
    commercializerCheckerData: string
    commercialRevShare: string
    derivativesAllowed: boolean
    derivativesAttribution: boolean
    derivativesApproval: boolean
    derivativesReciprocal: boolean
    territories: string[]
    distributionChannels: string[]
    contentRestrictions: string[]
}

export type RoyaltySplit = {
    id: Address
    holders: RoyaltyHolder[]
    claimFromIPPoolArg: string
}

export type RoyaltyHolder = {
    id: Address
    ownership: string
}

export type Term = {
    blockNumber: string
    blockTime: string
    id: Address
    ipId: Address
    licenseTemplate: Address
    licenseTermsId: string
}

export type LicenseTerm = {
    trait_type: string
    value: string
}

export type LicenseWithTerms = {
    blockNumber: string
    blockTime: string
    id: Address
    ipId: Address
    licenseTemplate: Address
    licenseTerms: LicenseTerm[]
}

export type AssetWithGraphDetial = GraphDetial & Asset

export type GraphDetial = {
    id: Address,
    ipId: Address,
    price: BigInt,
    holder: number,
    tokenContract: Address,
    tokenId: Address,
    floorPrice: BigInt,
    supply: number,
    remixs: {
        childIpId: Address
    }[]
    children: NFTMetadata[]
}